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

export interface LogoItem {
  name: string;
  logo: string;
}

export const OEM_PARTNERS: LogoItem[] = [
  { name: "Cisco", logo: ciscoLogo },
  { name: "Microsoft", logo: microsoftLogo },
  { name: "Fortinet", logo: fortinetLogo },
  { name: "Huawei", logo: huaweiLogo },
  { name: "Dell EMC", logo: emcLogo },
  { name: "HP", logo: hpLogo },
  { name: "Oracle", logo: oracleLogo },
  { name: "Lenovo", logo: lenovoLogo },
  { name: "VMware", logo: vmwareLogo },
  { name: "IBM", logo: ibmLogo },
  { name: "APC", logo: apcLogo },
  { name: "CommScope", logo: commscopeLogo },
  { name: "NETSCOUT", logo: netscoutLogo },
  { name: "Array Networks", logo: arrayLogo },
  { name: "CyberArk", logo: cyberarkLogo },
  { name: "Sophos", logo: sophosLogo },
  { name: "Vertiv", logo: vertivLogo },
];

export const ENTERPRISE_CLIENTS: LogoItem[] = [
  { name: "Guaranty Trust Bank (GTBank)", logo: gtbankLogo },
  { name: "Moniepoint", logo: moniepointLogo },
  { name: "Kuda Microfinance Bank", logo: kudaLogo },
  { name: "PalmPay", logo: palmpayLogo },
  { name: "Fidelity Bank", logo: fidelityLogo },
  { name: "Globus Bank", logo: globusLogo },
  { name: "AB Microfinance Bank Nigeria", logo: abMicrofinanceLogo },
  { name: "Rex Insurance", logo: rexLogo },
  { name: "DANE Investment", logo: daneLogo },
  { name: "MTN Nigeria", logo: mtnLogo },
  { name: "Spectranet 4G LTE", logo: spectranetLogo },
  { name: "NAHCO Aviance", logo: nahcoLogo },
  { name: "Binatone", logo: binatoneLogo },
  { name: "Lagos State Employment Trust Fund (LSETF)", logo: lsetfLogo },
  { name: "Nigeria Police Force (NPF)", logo: npfLogo },
  { name: "Heartland Alliance", logo: heartlandLogo },
];
