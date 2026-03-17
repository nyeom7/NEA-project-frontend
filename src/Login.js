function Login() {
    function validateUser(e) {
        e.preventDefault();
        const usernameInput = document.getElementById("usernameInput").value;
        const passwordInput = document.getElementById("passwordInput").value;

        if (!usernameInput || !passwordInput) {
            alert("Please enter both username and password.");
            return;
        }

        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: usernameInput, password: passwordInput })
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('isLoggedIn', 'true');
                window.location.href = '/';
            } else {
                alert("Invalid username or password.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert("An error occurred while logging in.");
        });

    }
    return (
        <div style={{ background: "#B3DEC1", height: "auto", minHeight: "100vh" }}>
            <h1 style={{ textAlign: "center", padding: "20px" }}>Login</h1>
            <form
                onSubmit={validateUser}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                <label for="usernameInput" className="form-label">
                    Username:
                    <input
                        type="text"
                        required
                        className="form-control"
                        id="usernameInput"
                        placeholder="Enter username"
                        autoComplete="off"
                        style={{ width: "300px", margin: "10px" }}
                    ></input>
                </label>
                <label for="passwordInput" className="form-label">
                    Password:
                    <input
                        type="password"
                        required
                        className="form-control"
                        id="passwordInput"
                        placeholder="Enter password"
                        autoComplete="off"
                        style={{ width: "300px", margin: "10px" }}
                    ></input>
                </label>
                <button type="submit" className="btn btn-primary mt-3 mb-3">
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;