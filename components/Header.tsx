
import { delay } from "@/lib/delay"
import HeaderLink from "./HeaderLink"

const Header = async() => {
    await delay(5000)
  return (
    <header>
        Header
        <HeaderLink />
    </header>
  )
}

export default Header