import React, { useState } from "react";

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Email: " + email + "\nPassword: " + password);
  };

  return (
    <div style={styles.form}>
      <h2 style={styles.title}>Login</h2>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
        required
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
        required
      />

      <button type="submit" onClick={handleSubmit} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  form: {
    background: "#1a1a1a",
    padding: "30px",
    borderRadius: "15px",
    boxShadow: "0 0 30px rgba(153,69,255,0.3)",
    width: "100%",
    maxWidth: "380px",
    margin: "0 auto",
    border: "1px solid #3a3a3a",
  },
  title: {
    color: "#ffffff",
    marginBottom: "20px",
    textAlign: "center",
    fontSize: "24px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  input: {
    width: "100%",
    padding: "12px 15px",
    margin: "8px 0",
    background: "#121212",
    border: "1px solid #3a3a3a",
    borderRadius: "8px",
    color: "#ffffff",
    fontSize: "14px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "15px",
    background: "linear-gradient(135deg, #9945ff, #00a8ff)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
};

export default Login;
