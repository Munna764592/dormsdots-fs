"use client";

interface LoadingOverlayProps {
  OverlayLoading: boolean;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ OverlayLoading }) => {
  return (
    OverlayLoading && (
      <div className="loading-overlay">
        <div className="spinner-o"></div>
      </div>
    )
  );
};

export default LoadingOverlay;
