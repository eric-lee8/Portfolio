"use client"

import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css"
import "react-pdf/dist/esm/Page/TextLayer.css"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

interface PDFViewerProps {
  pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [error, setError] = useState<string | null>(null)

  // Ensure the pdfUrl is a valid string and starts with a forward slash
  const validPdfUrl = typeof pdfUrl === "string" && pdfUrl.startsWith("/") ? pdfUrl : null

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setError(null)
  }

  function onDocumentLoadError(error: Error) {
    console.error("Error loading PDF:", error)
    setError("Failed to load PDF. Please try again later.")
  }

  if (!validPdfUrl) {
    return <div className="text-red-500">Invalid PDF URL</div>
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="pdf-viewer">
      <Document
        file={validPdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className="flex justify-center"
      >
        <Page pageNumber={pageNumber} />
      </Document>
      {numPages && (
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
            disabled={pageNumber <= 1}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
          >
            Previous
          </button>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <button
            onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
            disabled={pageNumber >= numPages}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md disabled:bg-gray-400"
          >
            Next
          </button>
        </div>
      )}
    </div>
  )
}
