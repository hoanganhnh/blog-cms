import * as React from "react";

interface GenerateContentProps {}

const GenerateContent = ({}: GenerateContentProps) => {
  const [generatedContent, setGeneratedContent] = React.useState<string>("");
  const [prompt, setPrompt] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const promptInput = `Q: ${prompt} Generate a response with less than 200 characters.`;

  const generateResponse = async (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      e.preventDefault();
      setGeneratedContent("");
      setLoading(true);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: promptInput,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      // This data is a ReadableStream
      const data = response.body;
      if (!data) {
        return;
      }

      const reader = data.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        setGeneratedContent((prev) => prev + chunkValue);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePrompt = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPrompt(e.target.value);
    },
    []
  );

  return (
    <div>
      <fieldset>
        <fieldset className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Idea generate ???"
            value={prompt}
            onChange={handleChangePrompt}
          />
        </fieldset>
      </fieldset>
      <fieldset className="form-group">
        {/* <textarea
            className="form-control"
            rows={8}
            placeholder="Content generated (markdown)"
            value={generatedContent}
            readOnly
          /> */}
        {generatedContent && <p className="form-control">{generatedContent}</p>}
      </fieldset>
      <button
        className="btn btn-lg pull-xs-right btn-primary"
        type="button"
        onClick={generateResponse}
      >
        Create
      </button>
    </div>
  );
};

export default GenerateContent;
