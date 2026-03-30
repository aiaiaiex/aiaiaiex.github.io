import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>
        <a href="https://github.com/aiaiaiex/AssetTaggerDatabase">
          Asset Tagger Database
        </a>
        <span>
          An easily deployable database for asset tagging tested with tSQLt.
        </span>
        <span>Tech Stack: T-SQL and tSQLt.</span>
      </div>

      <div>
        <a href="https://github.com/aiaiaiex/AssetTaggerBackEnd">
          Asset Tagger Back-End Server
        </a>
        <span>
          The complementary back-end server which provides the REST API for
          Asset Tagger Database with end-to-end data validation.
        </span>
        <span>Tech Stack: TypeScript, Express.js, Zod, and Bruno.</span>
      </div>

      <div>
        <a href="https://github.com/aiaiaiex/bala">
          Bala: A 2D Bullet Heaven Game Engine
        </a>
        <span>
          A game engine created for our undergraduate research which tested the
          effectiveness of collision detection algorithms (i.e., axis-aligned
          bounding boxes and circle-circle collision), procedural generation
          algorithms (i.e., Perlin noise and Simplex noise), and Craig Reynolds'
          flocking model by measuring the game engine's frame time.
        </span>
        <span>Tech Stack: Java, LWJGL, Dear ImGui, JBox2D, and Gson.</span>
      </div>

      <div>
        <a href="https://cinelaya.com/">Cinelaya's Landing Page</a>
        <span>
          I implemented the initial design of Cinelaya's landing page while
          staying true to its mockup down to the last pixel.
        </span>
        <span>
          Tech Stack: TypeScript, React.js, Tailwind CSS, and React Router.
        </span>
      </div>

      <div>
        <a href="https://github.com/kevinzekee/smsapp_1">
          YRSS: YRSS: Your Reliable Spam Shield
        </a>
        <span>
          An Android app which notifies you on how likely the English text
          messages you receive are spam by using a logistic regression model
          trained with a collection of public datasets regarding spam.
        </span>
        <span>
          Tech Stack: Python, Pandas, NLTK, Scikit-learn, Flask, Dart, and
          Flutter
        </span>
      </div>
    </div>
  );
}
