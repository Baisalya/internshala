import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Women</li>
          <li className="fListItem">Dress</li>
          <li className="fListItem">Pants</li>
          <li className="fListItem">Skirts</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Men </li>
          <li className="fListItem">Shirts </li>
          <li className="fListItem">Pants </li>
          <li className="fListItem">Hoodies</li>
        
        </ul>
        <ul className="fList">
          <li className="fListItem">Kids </li>
          <li className="fListItem">Shirts </li>
          <li className="fListItem">Pants </li>
          <li className="fListItem">Hoodies</li>
     </ul>
        
        <ul className="fList">
          <li className="fListItem">Links</li>
          <li className="fListItem">Home</li>
          <li className="fListItem">Login</li>
          <li className="fListItem">Contact</li>
          
        </ul>
         </div>
         <div className="underline"></div>
      <div className="fText">Copyright ©Ecommerce {new Date().getFullYear()}-23</div>
    </div>
  );
};

export default Footer