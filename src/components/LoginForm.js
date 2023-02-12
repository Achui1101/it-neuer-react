const LoginForm = () => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoFocus
                />
            </div>
            <div className="form-group">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Passwort"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <br />
            <button className="btn btn-raised btn-primary" type="submit">Login</button>
        </form>
    )
}
export default LoginForm;
