import Image from "next/image";

const logoUrl =
  "https://s3-alpha-sig.figma.com/img/8be1/c27b/24873ffb8a3345a8dedea9b0d8f9e7ba?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hscq97n57E-ODprRGY61tc~RF744y6TBqmSUzGgJLQxiOAWXYKSBfEoMgzP5iNnSUG2qPY-8ABEEzsPq5bfwAKS2twDEn0GVSvif8j-WubvROaA21tkcJWyN4dgoBy0PaDOuKcYnhRRtdcpGN5bLju5qGZGRd6rPOiJ7Qge8TlJBqpQ9fBHQbZ8EkTfUa25PdWQf4Bl-V0GqYhFL5GTnsInuzEF8KnoDH2CAb6fa0mAh74VmsZp4dEMW7OdE4FEdCrQU3DmGqF0p-j8c-iUSHep9krfMTEVdLVv536Ta7kpWQE300A9srkPmxeKl-cyzisifRX~XBYB5ZjS~UDZkRg__";
export default function index() {
  return (
    <nav>
      <Image
        className="header-logo"
        src={logoUrl}
        width={240}
        height={48}
        priority
        alt="Elbrit Life Sciences"
      />
    </nav>
  );
}
