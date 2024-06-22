const Footer = (props) => {
    return (
        <footer>
            { props.copyrightInfo}
            <div>
                { props.authorInfo }
            </div>
        </footer>
    )
}

export default Footer;