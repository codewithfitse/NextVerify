import React, { useState } from "react";

const NextVerfy = () => {
  const [transactionLink, setTransactionLink] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationResult, setVerificationResult] = useState(null);
  const [error, setError] = useState("");

  const getTransactionDetails = (text) => {
    // Extract values from Commercial Bank of Ethiopia receipt format
    const name = text.match(/Payer\s+([A-Z\s]+)/i)?.[1]?.trim() || null;
    const transactionId =
      text.match(/Reference No\. \(VAT Invoice No\)\s+([A-Z0-9]+)/i)?.[1] ||
      null;
    const amount =
      text.match(/Transferred Amount\s+([\d,]+\.\d{2})\s+ETB/i)?.[1] || null;
    const date =
      text.match(/Payment Date & Time\s+(\d{1,2}\/\d{1,2}\/\d{4})/i)?.[1] ||
      null;

    // Additional fields for better validation
    const accountNumber = text.match(/Account\s+(\d+\*+\d+)/i)?.[1] || null;
    const receiver = text.match(/Receiver\s+([A-Z\s]+)/i)?.[1]?.trim() || null;
    const amountInWords =
      text.match(/Amount in Word\s+([A-Z\s&]+)/i)?.[1]?.trim() || null;

    return {
      name,
      transactionId,
      amount,
      date,
      accountNumber,
      receiver,
      amountInWords,
      isValid: !!transactionId && !!amount && !!date && !!name,
    };
  };

  const downloadExtractVerify = async (url) => {
    try {
      // Step 1: Download PDF using fetch (browser-compatible)
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const arrayBuffer = await response.arrayBuffer();
      console.log(`✅ PDF downloaded successfully`);

      // Step 2: Convert ArrayBuffer to Uint8Array for PDF parsing
      const uint8Array = new Uint8Array(arrayBuffer);

      // Step 3: Use PDF.js to extract text (browser-compatible)
      const pdfjsLib = window.pdfjsLib;

      if (!pdfjsLib) {
        throw new Error("PDF.js library not loaded. Please refresh the page.");
      }

      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

      const loadingTask = pdfjsLib.getDocument({ data: uint8Array });
      const pdf = await loadingTask.promise;

      let fullText = "";

      // Extract text from all pages
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(" ");
        fullText += pageText + " ";
      }

      console.log("🔍 PDF text extracted successfully");

      // Step 4: Extract specific values
      const details = getTransactionDetails(fullText);
      console.log(fullText);

      console.log("🔍 Extracted Details:");
      console.log(details);

      return details;
    } catch (error) {
      console.error("❌ Error:", error.message);
      throw error;
    }
  };

  const handleVerify = async () => {
    if (!transactionLink.trim()) {
      setError("Please enter a transaction link");
      return;
    }

    setIsLoading(true);
    setError("");
    setVerificationResult(null);

    try {
      const details = await downloadExtractVerify(transactionLink);

      setVerificationResult({
        success: details.isValid,
        message: details.isValid
          ? "Transaction verified successfully! ✅"
          : "Verification failed ❌",
        details: details.isValid
          ? `Transaction ID: ${details.transactionId} | Amount: $${details.amount} | Date: ${details.date}`
          : "Unable to extract valid transaction data from the provided link.",
        data: details,
      });
    } catch (err) {
      setError(`Verification failed: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isLoading && transactionLink.trim()) {
      handleVerify();
    }
  };

  const resetForm = () => {
    setTransactionLink("");
    setVerificationResult(null);
    setError("");
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Enhanced Animated Galaxy Background */}
      <div className="absolute inset-0">
        {/* Animated Nebula Clouds */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 via-transparent to-transparent rounded-full animate-pulse-glow blur-3xl"></div>
          <div
            className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/15 via-transparent to-transparent rounded-full animate-pulse-glow blur-3xl"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent rounded-full animate-pulse-glow blur-3xl"
            style={{ animationDelay: "4s" }}
          ></div>
        </div>

        {/* Stars Layer 1 - Small stars with enhanced animation */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 4}s`,
                boxShadow: `0 0 ${
                  2 + Math.random() * 4
                }px rgba(255, 255, 255, ${0.5 + Math.random() * 0.5})`,
              }}
            />
          ))}
        </div>

        {/* Stars Layer 2 - Medium stars with glow */}
        <div className="absolute inset-0">
          {[...Array(80)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-200 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 5}s`,
                boxShadow: `0 0 ${
                  4 + Math.random() * 6
                }px rgba(147, 197, 253, ${0.6 + Math.random() * 0.4})`,
              }}
            />
          ))}
        </div>

        {/* Stars Layer 3 - Large stars with intense glow */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-100 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                boxShadow: `0 0 ${
                  8 + Math.random() * 12
                }px rgba(219, 234, 254, ${0.7 + Math.random() * 0.3})`,
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: "1s",
                boxShadow: `0 0 20px rgba(255, 255, 255, 0.8)`,
                transform: "translateX(-100px) translateY(50px)",
              }}
            />
          ))}
        </div>

        {/* Enhanced Nebula-like effects */}
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/30 via-transparent to-transparent animate-pulse-glow" />
        <div
          className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-transparent animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute inset-0 bg-gradient-radial from-cyan-900/15 via-transparent to-transparent animate-pulse-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      {/* Main Content with Enhanced Styling */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-3xl">
          {/* Enhanced Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 mb-4 animate-fade-in drop-shadow-2xl">
              NextVerfy
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-6 rounded-full animate-pulse-glow"></div>
            <p
              className="text-xl md:text-2xl text-blue-200 animate-fade-in font-light tracking-wide"
              style={{ animationDelay: "0.3s" }}
            >
              Verify your transaction links securely
            </p>
            <p
              className="text-sm text-blue-300/60 mt-2 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Advanced PDF processing with blockchain-grade security
            </p>
          </div>

          {/* Enhanced Input and Button Container */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl animate-slide-up relative overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse-glow"></div>
            <div className="absolute inset-[2px] rounded-3xl bg-gradient-to-br from-black/80 via-gray-900/80 to-blue-900/80"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Enhanced Input Field */}
                <div className="flex-1 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <input
                    type="text"
                    value={transactionLink}
                    onChange={(e) => setTransactionLink(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Paste transaction PDF link..."
                    disabled={isLoading}
                    className="relative w-full px-8 py-6 bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all duration-500 text-white placeholder-blue-200/60 font-medium text-lg shadow-2xl hover:shadow-blue-500/20 hover:scale-[1.02] focus:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group-hover:border-blue-400/50"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Enhanced Verify Button */}
                <button
                  onClick={handleVerify}
                  disabled={!transactionLink.trim() || isLoading}
                  className="relative px-10 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-500 hover:via-purple-500 hover:to-cyan-500 disabled:from-gray-600 disabled:via-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/40 hover:scale-105 focus:scale-105 transition-all duration-500 transform focus:outline-none focus:ring-4 focus:ring-blue-400/50 min-w-[160px] animate-pulse-glow group overflow-hidden"
                >
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {isLoading ? (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <span className="opacity-0">Verify</span>
                    </>
                  ) : (
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Verify
                    </span>
                  )}
                </button>
              </div>

              {/* Enhanced Error Message */}
              {error && (
                <div className="mt-6 p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border border-red-500/30 rounded-2xl animate-fade-in relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 animate-pulse"></div>
                  <div className="relative z-10 flex items-center gap-3">
                    <svg
                      className="w-6 h-6 text-red-300 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-red-200 text-base font-medium">
                      {error}
                    </p>
                  </div>
                </div>
              )}

              {/* Enhanced Verification Result */}
              {verificationResult && (
                <div
                  className={`mt-6 p-8 rounded-2xl animate-fade-in relative overflow-hidden ${
                    verificationResult.success
                      ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30"
                      : "bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30"
                  }`}
                >
                  {/* Animated background */}
                  <div
                    className={`absolute inset-0 ${
                      verificationResult.success
                        ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10"
                        : "bg-gradient-to-r from-red-500/10 to-pink-500/10"
                    } animate-pulse`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      {verificationResult.success ? (
                        <svg
                          className="w-8 h-8 text-green-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-8 h-8 text-red-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <p
                        className={`text-lg font-bold ${
                          verificationResult.success
                            ? "text-green-200"
                            : "text-red-200"
                        }`}
                      >
                        {verificationResult.message}
                      </p>
                    </div>
                    <p
                      className={`text-sm ${
                        verificationResult.success
                          ? "text-green-300"
                          : "text-red-300"
                      }`}
                    >
                      {verificationResult.details}
                    </p>

                    {/* Enhanced Additional Details for Successful Verification */}
                    {verificationResult.success && verificationResult.data && (
                      <div className="mt-6 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                            <span className="text-blue-300 font-medium">
                              Payer Name:
                            </span>
                            <span className="font-bold text-green-300 bg-green-500/10 px-2 py-1 rounded">
                              {verificationResult.data.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                            <span className="text-blue-300 font-medium">
                              Transaction ID:
                            </span>
                            <span className="font-mono text-yellow-300 bg-yellow-500/10 px-2 py-1 rounded">
                              {verificationResult.data.transactionId}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                            <span className="text-blue-300 font-medium">
                              Amount:
                            </span>
                            <span className="font-bold text-cyan-300 bg-cyan-500/10 px-2 py-1 rounded">
                              {verificationResult.data.amount} ETB
                            </span>
                          </div>
                          <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                            <span className="text-blue-300 font-medium">
                              Date:
                            </span>
                            <span className="text-purple-300 bg-purple-500/10 px-2 py-1 rounded">
                              {verificationResult.data.date}
                            </span>
                          </div>
                          {verificationResult.data.accountNumber && (
                            <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                              <span className="text-blue-300 font-medium">
                                Account:
                              </span>
                              <span className="font-mono text-orange-300 bg-orange-500/10 px-2 py-1 rounded">
                                {verificationResult.data.accountNumber}
                              </span>
                            </div>
                          )}
                          {verificationResult.data.receiver && (
                            <div className="flex items-center gap-2 p-3 bg-white/5 rounded-xl">
                              <span className="text-blue-300 font-medium">
                                Receiver:
                              </span>
                              <span className="font-bold text-pink-300 bg-pink-500/10 px-2 py-1 rounded">
                                {verificationResult.data.receiver}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Enhanced Amount in Words */}
                        {verificationResult.data.amountInWords && (
                          <div className="mt-4 p-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                            <span className="text-blue-300 font-semibold">
                              Amount in Words:
                            </span>
                            <div className="mt-2 text-blue-200 italic font-medium">
                              {verificationResult.data.amountInWords}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <button
                      onClick={resetForm}
                      className="mt-6 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 text-white text-sm font-medium rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 transform"
                    >
                      Verify Another Link
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Additional Info */}
          <div
            className="text-center mt-10 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <p className="text-blue-200/80 text-lg font-medium">
                Secure • Fast • Reliable
              </p>
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
            <p className="text-blue-300/60 text-sm">
              Advanced PDF processing with blockchain-grade security
              verification
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextVerfy;
