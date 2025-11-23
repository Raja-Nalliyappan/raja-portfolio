import "./Footer.css"
export const Footer = () => {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const newDate = `${day}/${month}/${year}`
    return(
        <footer>
            <div className="footer-parent">
                <p>Email: n.raja3710@gmail.com</p>
                <p>© {newDate} All Rights Reserved.</p>
                <p>Phone: +91 9626945746</p>
            </div>
        </footer>
    )
}