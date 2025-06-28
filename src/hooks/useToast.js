// import { useState, useEffect } from "react";
// import { PublicKey } from "@solana/web3.js";

// export function useWallet() {
//   const [wallet, setWallet] = useState(null);
//   const [publicKey, setPublicKey] = useState(null);

//   useEffect(() => {
//     const connectWallet = async () => {
//       if (window.solana && window.solana.isPhantom) {
//         try {
//           await window.solana.connect({ onlyIfTrusted: true });
//           setWallet(window.solana);
//           setPublicKey(new PublicKey(window.solana.publicKey.toString()));
//         } catch (error) {
//           console.log("Auto-connect failed, user must connect manually");
//         }
//       }
//     };
//     connectWallet();
//   }, []);

//   return { wallet, publicKey };
// }
import toast from "react-hot-toast";

export function useToast() {
  const showToast = (message, type = "info") => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };

  return { showToast };
}