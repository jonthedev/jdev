import { nanoid } from "nanoid";

import LogoANWB from "~assets/anwb.svg";
import LogoVanLanschot from "~assets/van-lanschot-kempen.svg";

export const clients = [
  {
    id: nanoid(),
    img: (
      <img src={LogoANWB} alt='anwb logo' width={200} height={200} />
    )
  },
  {
    id: nanoid(),
    img: (
      <img
        src={LogoVanLanschot}
        alt='van lanschot kempen logo'
        width={200}
        height={200}
      />
    )
  }
];
