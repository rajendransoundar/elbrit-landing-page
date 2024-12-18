import Image from "next/image";
import { EmailIcon, LocIcon, PhoneIcon, SmallLocIcon } from "../svsIcons";
const footerData = [
  { icon: <PhoneIcon />, title: "Phone Number", subTitle: "+974 3118 1843" },
  { icon: <EmailIcon />, title: "Email Address", subTitle: "Elbrithcqhr@gmail.com" },
  { icon: <LocIcon />, title: "Office Location", subTitle: "Ambassador Street, Zone 61," },
];
const logoUrl =
  "https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hscq97n57E-ODprRGY61tc~RF744y6TBqmSUzGgJLQxiOAWXYKSBfEoMgzP5iNnSUG2qPY-8ABEEzsPq5bfwAKS2twDEn0GVSvif8j-WubvROaA21tkcJWyN4dgoBy0PaDOuKcYnhRRtdcpGN5bLju5qGZGRd6rPOiJ7Qge8TlJBqpQ9fBHQbZ8EkTfUa25PdWQf4Bl-V0GqYhFL5GTnsInuzEF8KnoDH2CAb6fa0mAh74VmsZp4dEMW7OdE4FEdCrQU3DmGqF0p-j8c-iUSHep9krfMTEVdLVv536Ta7kpWQE300A9srkPmxeKl-cyzisifRX~XBYB5ZjS~UDZkRg__";

export default function index() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-card-container">
          {footerData?.map((card, index) => (
            <div key={`${card?.title}${index}`} className="footer-card">
              <div className="card-left">{card?.icon}</div>
              <div className="card-right">
                <div className="title">{card?.title}</div>
                <div className="sub-title">{card?.subTitle}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="footer-logo-container">
          <Image
            className="footer-logo"
            src={logoUrl}
            width={240}
            height={48}
            priority
            alt="Elbrit Life Sciences"
          />
          <div className="footer-content">
            Your health, physical and emotional well-being is important to us. We are always by your
            side and have made it even easier for you to find the necessary vitamins.
          </div>
        </div>
        <div className="copyright">
          <SmallLocIcon /> Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
        </div>
      </div>
    </>
  );
}
