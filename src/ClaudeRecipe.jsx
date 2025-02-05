import ReactMarkdown from 'react-markdown';

function ClaudeRecipe(props) {
  return (
    <>
      {props.getRecipe && (
        <section className="suggested-recipe-container">
          <ReactMarkdown>{props.getRecipe}</ReactMarkdown>
        </section>
      )}
    </>
  );
}

export default ClaudeRecipe;
