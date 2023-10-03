

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center">
        <div className="md:flex md:justify-between">
          <div className="md:order-2">
            <p>Powered by Your Company</p>
          </div>

          <p>&copy; {currentYear} All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
