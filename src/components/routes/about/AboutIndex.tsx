import profilePicture from "../../../assets/jpg/profile-picture.jpg";

function AboutIndex() {
  return (
    <div className="flex grow flex-col items-center justify-center gap-y-8 p-8 sm:p-16 md:flex-row md:gap-x-8 md:gap-y-0">
      <img
        alt="Profile picture"
        className="size-56 rounded-full shadow shadow-gray-400 sm:size-64"
        src={profilePicture}
      />
      <div className="flex flex-col items-start gap-y-4">
        <span className="text-3xl font-black sm:text-4xl">
          <span className="text-red-700">C</span>arlos{" "}
          <span className="text-red-700">J</span>ose Ysais
        </span>
        <span className="text-xl font-medium sm:text-2xl">
          Ever since I encountered Python accidentally by clicking a YouTube
          video with a snake thumbnail, I knew I found my profession. I started
          by learning from free resources online created by genereous developers
          and{" "}
          <span className="font-bold text-blue-700">
            I never stopped learning
          </span>{" "}
          since. Currently, I specialize in building web apps, especially when
          it comes to{" "}
          <span className="font-bold text-blue-700">back-end servers</span> and{" "}
          <span className="font-bold text-blue-700">databases</span>.
        </span>
      </div>
    </div>
  );
}

export default AboutIndex;
