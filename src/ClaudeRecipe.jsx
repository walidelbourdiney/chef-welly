function ClaudeRecipe(props) {
  return (
    <>
      {props.getRecipe && (
        <section>
          {props.getRecipe}
        </section>
      )}
    </>
  );
}

export default ClaudeRecipe;
