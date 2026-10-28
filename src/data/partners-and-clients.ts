// OEM Technology Partners
import apcLogo from "../../Partners Logo/LOGO-APC.png";
import arrayLogo from "../../Partners Logo/LOGO-Array-Networks.png";
import ciscoLogo from "../../Partners Logo/LOGO-Cisco.png";
import commscopeLogo from "../../Partners Logo/LOGO-CommScope.png";
import cyberarkLogo from "../../Partners Logo/LOGO-Cyberark.png";
import emcLogo from "../../Partners Logo/LOGO-EMC.png";
import fortinetLogo from "../../Partners Logo/LOGO-Fortinet.png";
import hpLogo from "../../Partners Logo/LOGO-HP.png";
import huaweiLogo from "../../Partners Logo/LOGO-Huawei.png";
import ibmLogo from "../../Partners Logo/LOGO-IBM.png";
import lenovoLogo from "../../Partners Logo/LOGO-Lenovo.png";
import microsoftLogo from "../../Partners Logo/LOGO-Microsoft.png";
import netscoutLogo from "../../Partners Logo/LOGO-NETSCOUT.png";
import oracleLogo from "../../Partners Logo/LOGO-Oracle.png";
import sophosLogo from "../../Partners Logo/LOGO-Sophos.png";
import vertivLogo from "../../Partners Logo/LOGO-Vertiv.png";
import vmwareLogo from "../assets/partners/vmware.png";

// Enterprise Clients
import abMicrofinanceLogo from "../../Partners Logo/LOGO-AB-Microfinance-Bank-Nigeria.png";
import binatoneLogo from "../../Partners Logo/LOGO-Binatone.png";
import daneLogo from "../../Partners Logo/LOGO-DANE.png";
import fidelityLogo from "../../Partners Logo/LOGO-Fidelity-Bank.png";
import globusLogo from "../../Partners Logo/LOGO-Globus.png";
import gtbankLogo from "../../Partners Logo/LOGO-GTBank.png";
import heartlandLogo from "../../Partners Logo/LOGO-Heartland-Alliance.png";
import kudaLogo from "../../Partners Logo/LOGO-Kuda-Microfinance-Bank.png";
import lsetfLogo from "../../Partners Logo/LOGO-LSETF.png";
import mtnLogo from "../../Partners Logo/LOGO-MTN.png";
import moniepointLogo from "../../Partners Logo/LOGO-Moniepoint.png";
import nahcoLogo from "../../Partners Logo/LOGO-NAHCoAviance.png";
import npfLogo from "../../Partners Logo/LOGO-NPF.png";
import palmpayLogo from "../../Partners Logo/LOGO-PalmPay.png";
import rexLogo from "../../Partners Logo/LOGO-Rex-Insurance.png";
import spectranetLogo from "../../Partners Logo/LOGO-Spectranet.png";

export type PartnerCategory =
  | "All"
  | "Networking & Cabling"
  | "Cybersecurity & Identity"
  | "Compute, Storage & Cloud"
  | "Power & Data Centre";

export interface PartnerItem {
  name: string;
  category:
    | "Networking & Cabling"
    | "Cybersecurity & Identity"
    | "Compute, Storage & Cloud"
    | "Power & Data Centre";
  logo: string;
  focus: string;
  description: string;
}

export const OEM_PARTNERS: PartnerItem[] = [
  {
    name: "Cisco",
    category: "Networking & Cabling",
    logo: ciscoLogo,
    focus: "Enterprise Networking & Collaboration",
    description:
      "Catalyst switches, enterprise routing, SD-WAN, and secure collaboration architectures.",
  },
  {
    name: "Microsoft",
    category: "Compute, Storage & Cloud",
    logo: microsoftLogo,
    focus: "Cloud & Enterprise Software",
    description:
      "Azure cloud environments, Windows Server ecosystems, and modern workplace security.",
  },
  {
    name: "Fortinet",
    category: "Cybersecurity & Identity",
    logo: fortinetLogo,
    focus: "Next-Gen Cybersecurity",
    description:
      "FortiGate firewalls, secure SD-WAN fabrics, and AI-powered unified threat management.",
  },
  {
    name: "Huawei",
    category: "Networking & Cabling",
    logo: huaweiLogo,
    focus: "Enterprise Infrastructure & Optical",
    description:
      "Campus switches, enterprise routers, optical transmission, and hybrid storage arrays.",
  },
  {
    name: "Dell EMC",
    category: "Compute, Storage & Cloud",
    logo: emcLogo,
    focus: "Enterprise Compute & Storage",
    description:
      "PowerEdge server clusters, SAN/NAS storage arrays, and enterprise data protection.",
  },
  {
    name: "HP",
    category: "Compute, Storage & Cloud",
    logo: hpLogo,
    focus: "Hardware & High-Throughput Print",
    description:
      "Enterprise workstations, elite business computing fleets, and commercial document systems.",
  },
  {
    name: "Oracle",
    category: "Compute, Storage & Cloud",
    logo: oracleLogo,
    focus: "Databases & Enterprise Applications",
    description:
      "Database appliances, high-availability RAC configurations, and Oracle Cloud solutions.",
  },
  {
    name: "Lenovo",
    category: "Compute, Storage & Cloud",
    logo: lenovoLogo,
    focus: "ThinkSystem Servers & Storage",
    description:
      "Scalable rack servers, dense virtualization platforms, and enterprise data solutions.",
  },
  {
    name: "VMware",
    category: "Compute, Storage & Cloud",
    logo: vmwareLogo,
    focus: "Virtualisation & Cloud Foundation",
    description: "vSphere virtualization, vSAN hyper-converged storage, and NSX microsegmentation.",
  },
  {
    name: "IBM",
    category: "Compute, Storage & Cloud",
    logo: ibmLogo,
    focus: "Enterprise Mainframes & Systems",
    description:
      "Mission-critical Power systems, flash storage, and enterprise hybrid cloud systems.",
  },
  {
    name: "APC",
    category: "Power & Data Centre",
    logo: apcLogo,
    focus: "Data Centre Power & Cooling",
    description:
      "Smart-UPS units, modular Symmetra power, rack enclosures, and environmental monitoring.",
  },
  {
    name: "CommScope",
    category: "Networking & Cabling",
    logo: commscopeLogo,
    focus: "Structured Cabling & Connectivity",
    description:
      "SYSTIMAX copper and fiber infrastructure, high-density patch fields, and physical cabling.",
  },
  {
    name: "NETSCOUT",
    category: "Cybersecurity & Identity",
    logo: netscoutLogo,
    focus: "Network Assurance & DDoS Defense",
    description:
      "Arbor DDoS attack mitigation, packet flow inspection, and real-time network visibility.",
  },
  {
    name: "Array Networks",
    category: "Networking & Cabling",
    logo: arrayLogo,
    focus: "Application Delivery & Remote Access",
    description:
      "High-throughput Application Delivery Controllers (ADC) and secure SSL VPN gateways.",
  },
  {
    name: "CyberArk",
    category: "Cybersecurity & Identity",
    logo: cyberarkLogo,
    focus: "Privileged Access Management",
    description:
      "Privileged account security, credential vaulting, and zero-trust identity protection.",
  },
  {
    name: "Sophos",
    category: "Cybersecurity & Identity",
    logo: sophosLogo,
    focus: "Synchronized Security & Endpoints",
    description:
      "Intercept X endpoint detection, response (EDR), and integrated network firewalls.",
  },
  {
    name: "Vertiv",
    category: "Power & Data Centre",
    logo: vertivLogo,
    focus: "Critical Digital Infrastructure",
    description:
      "Liebert precision thermal cooling, modular data centre power, and intelligent rack PDUs.",
  },
];

export type ClientCategory =
  | "All"
  | "Banking & Fintech"
  | "Telecommunications"
  | "Aviation & Commerce"
  | "Public Sector & NGOs";

export interface ClientItem {
  name: string;
  category:
    "Banking & Fintech" | "Telecommunications" | "Aviation & Commerce" | "Public Sector & NGOs";
  logo: string;
  description: string;
  highlight: string;
}

export const ENTERPRISE_CLIENTS: ClientItem[] = [
  {
    name: "Guaranty Trust Bank (GTBank)",
    category: "Banking & Fintech",
    logo: gtbankLogo,
    description: "Tier-1 commercial bank operating across multiple African markets and the UK.",
    highlight: "Core Banking & Branch Infrastructure",
  },
  {
    name: "Moniepoint",
    category: "Banking & Fintech",
    logo: moniepointLogo,
    description:
      "Nigeria's leading all-in-one financial services platform processing billions in monthly transactions.",
    highlight: "High-Availability FinTech Infrastructure",
  },
  {
    name: "Kuda Microfinance Bank",
    category: "Banking & Fintech",
    logo: kudaLogo,
    description:
      "Nigeria's premier mobile-first digital bank serving millions of retail customers.",
    highlight: "Cloud & Digital Banking Infrastructure",
  },
  {
    name: "PalmPay",
    category: "Banking & Fintech",
    logo: palmpayLogo,
    description: "Rapidly growing digital payment and mobile wallet platform across Africa.",
    highlight: "Payments Gateway Resiliency",
  },
  {
    name: "Fidelity Bank",
    category: "Banking & Fintech",
    logo: fidelityLogo,
    description:
      "Full-fledged commercial bank serving retail, SME, and corporate clients nationwide.",
    highlight: "Enterprise Network & Security",
  },
  {
    name: "Globus Bank",
    category: "Banking & Fintech",
    logo: globusLogo,
    description: "Fast-growing licensed commercial bank driven by modern digital channels.",
    highlight: "Data Centre & Branch Connectivity",
  },
  {
    name: "AB Microfinance Bank Nigeria",
    category: "Banking & Fintech",
    logo: abMicrofinanceLogo,
    description:
      "National microfinance bank empowering micro, small, and medium-sized enterprises.",
    highlight: "Distributed Branch IT & Hardware",
  },
  {
    name: "Rex Insurance",
    category: "Banking & Fintech",
    logo: rexLogo,
    description:
      "Established general insurer delivering life, non-life, and enterprise risk protection.",
    highlight: "Enterprise Compute & Disaster Recovery",
  },
  {
    name: "DANE Investment",
    category: "Banking & Fintech",
    logo: daneLogo,
    description:
      "Investment and asset management firm providing capital market and portfolio services.",
    highlight: "Secure Trading Infrastructure",
  },
  {
    name: "MTN Nigeria",
    category: "Telecommunications",
    logo: mtnLogo,
    description: "Nigeria's largest telecommunications and broadband network provider.",
    highlight: "Carrier-Grade Infrastructure & Enterprise Networks",
  },
  {
    name: "Spectranet 4G LTE",
    category: "Telecommunications",
    logo: spectranetLogo,
    description:
      "Pioneer 4G LTE broadband service provider connecting homes and businesses across Nigeria.",
    highlight: "Broadband Network Core & Transmission",
  },
  {
    name: "NAHCO Aviance",
    category: "Aviation & Commerce",
    logo: nahcoLogo,
    description:
      "Nigerian Aviation Handling Company, handling passenger, cargo, and aircraft services at major airports.",
    highlight: "Mission-Critical Airport Logistics Systems",
  },
  {
    name: "Binatone",
    category: "Aviation & Commerce",
    logo: binatoneLogo,
    description:
      "Global manufacturer and distributor of consumer electronics and lifestyle appliances.",
    highlight: "Distribution & Corporate IT Infrastructure",
  },
  {
    name: "Lagos State Employment Trust Fund (LSETF)",
    category: "Public Sector & NGOs",
    logo: lsetfLogo,
    description: "Lagos State government agency promoting job creation and enterprise growth.",
    highlight: "Public Sector IT & Enterprise Systems",
  },
  {
    name: "Nigeria Police Force (NPF)",
    category: "Public Sector & NGOs",
    logo: npfLogo,
    description:
      "Principal national law enforcement agency maintaining security across Nigeria's 36 states.",
    highlight: "Secure Institutional Communications & Infrastructure",
  },
  {
    name: "Heartland Alliance",
    category: "Public Sector & NGOs",
    logo: heartlandLogo,
    description:
      "Global human rights and public health non-governmental organisation operating in Nigeria.",
    highlight: "Secure Field Office Connectivity & Collaboration",
  },
];
