function ProjectsIndex() {
  return (
    <div className="flex grow flex-col items-start justify-center gap-y-8 p-8 sm:p-16">
      <div className="flex w-full flex-row">
        <span className="text-center text-xl font-bold text-blue-700 [text-orientation:upright] [writing-mode:vertical-rl] sm:text-2xl">
          2026
        </span>
        <div className="max-w-1 min-w-1 bg-blue-700"></div>

        <div className="flex flex-col gap-y-2 pl-4">
          <a
            className="text-2xl font-black text-blue-700 hover:underline sm:text-3xl"
            href="https://github.com/aiaiaiex/AssetTaggerDatabase"
            rel="noopener noreferrer"
            target="_blank"
          >
            Asset Tagger Database
          </a>
          <span className="text-xl font-light sm:text-2xl">
            An easily deployable database for asset tagging tested with tSQLt.
          </span>
          <span className="font-bold">
            <span className="text-red-700">Tech Stack:</span> T-SQL and tSQLt.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row">
        <span className="text-center text-xl font-bold text-blue-700 [text-orientation:upright] [writing-mode:vertical-rl] sm:text-2xl">
          2026
        </span>
        <div className="max-w-1 min-w-1 bg-blue-700"></div>

        <div className="flex flex-col gap-y-2 pl-4">
          <a
            className="text-2xl font-black text-blue-700 hover:underline sm:text-3xl"
            href="https://github.com/aiaiaiex/AssetTaggerBackEnd"
            rel="noopener noreferrer"
            target="_blank"
          >
            Asset Tagger Back-End Server
          </a>
          <span className="text-xl font-light sm:text-2xl">
            The complementary back-end server which provides the REST API for
            Asset Tagger Database with end-to-end data validation.
          </span>
          <span className="font-bold">
            <span className="text-red-700">Tech Stack:</span> TypeScript,
            Express.js, Zod, and Bruno.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row">
        <span className="text-center text-xl font-bold text-yellow-600 [text-orientation:upright] [writing-mode:vertical-rl] sm:text-2xl">
          2025
        </span>
        <div className="max-w-1 min-w-1 bg-yellow-600"></div>

        <div className="flex flex-col gap-y-2 pl-4">
          <a
            className="text-2xl font-black text-yellow-600 hover:underline sm:text-3xl"
            href="https://github.com/aiaiaiex/bala"
            rel="noopener noreferrer"
            target="_blank"
          >
            Bala: A 2D Bullet Heaven Game Engine
          </a>
          <span className="text-xl font-light sm:text-2xl">
            A game engine created for our undergraduate research which tested
            the effectiveness of collision detection algorithms (i.e.,
            axis-aligned bounding boxes and circle-circle collision), procedural
            generation algorithms (i.e., Perlin noise and Simplex noise), and
            Craig Reynolds' flocking model by measuring the game engine's frame
            time.
          </span>
          <span className="font-bold">
            <span className="text-red-700">Tech Stack:</span> Java, LWJGL, Dear
            ImGui, JBox2D, and Gson.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row">
        <span className="text-center text-xl font-bold text-green-700 [text-orientation:upright] [writing-mode:vertical-rl] sm:text-2xl">
          2025
        </span>
        <div className="max-w-1 min-w-1 bg-green-700"></div>

        <div className="flex flex-col gap-y-2 pl-4">
          <a
            className="text-2xl font-black text-green-700 hover:underline sm:text-3xl"
            href="https://cinelaya.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Cinelaya's Landing Page
          </a>
          <span className="text-xl font-light sm:text-2xl">
            I implemented the initial design of Cinelaya's landing page while
            staying true to its mockup down to the last pixel.
          </span>
          <span className="font-bold">
            <span className="text-red-700">Tech Stack:</span> TypeScript,
            React.js, Tailwind CSS, and React Router.
          </span>
        </div>
      </div>

      <div className="flex w-full flex-row">
        <span className="text-center text-xl font-bold text-blue-700 [text-orientation:upright] [writing-mode:vertical-rl] sm:text-2xl">
          2024
        </span>
        <div className="max-w-1 min-w-1 bg-blue-700"></div>

        <div className="flex flex-col gap-y-2 pl-4">
          <a
            className="text-2xl font-black text-blue-700 hover:underline sm:text-3xl"
            href="https://github.com/kevinzekee/smsapp_1"
            rel="noopener noreferrer"
            target="_blank"
          >
            YRSS: Your Reliable Spam Shield
          </a>
          <span className="text-xl font-light sm:text-2xl">
            An Android app which notifies you on how likely the English text
            messages you receive are spam by using a logistic regression model
            trained with a collection of public datasets regarding spam.
          </span>
          <span className="font-bold">
            <span className="text-red-700">Tech Stack:</span> Python, Pandas,
            NLTK, Scikit-learn, Flask, Dart, and Flutter.
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProjectsIndex;
