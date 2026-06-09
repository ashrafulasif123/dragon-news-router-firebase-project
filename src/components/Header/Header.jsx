import headerLogo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col items-center gap-3 text-center mt-10">
            <img src={headerLogo} alt="" className="" />

            <h3 className="text-lg text-gray-600">
                Journalism Without Fear or Favour
            </h3>

            <h2 className="text-2xl font-semibold">
                Sunday, November 27, 2025
            </h2>
        </div>
    );
};

export default Header;