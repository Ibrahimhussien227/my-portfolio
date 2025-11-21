import { socialImgs } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
          <a href="/">Visit my blog</a>
        </div>

        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`Visit Ibrahim's ${img.name} profile`}
              href={img.url}
              key={img.url}
            >
              <img
                src={img.imgPath}
                alt={img.name}
                loading="lazy"
                decoding="async"
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Ibrahim Ali. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
