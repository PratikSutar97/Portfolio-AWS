import { useEffect, useState } from "react";

const WarningPopup = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileDevices = /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|wpdesktop/;
      setIsMobile(mobileDevices.test(userAgent));
    };

    checkDevice();
  }, []);

  if (!isMobile || isDismissed) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>Warning!</h2>
        <p>This site is best viewed on a desktop or laptop.</p>
        <button onClick={() => setIsDismissed(true)} style={styles.button}>
          Close this message
        </button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  popup: {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default WarningPopup;
