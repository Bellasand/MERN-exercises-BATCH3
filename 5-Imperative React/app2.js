const App = () => {
    ...

    return (
      <div>
        <h1>My Hacker Stories</h1>

        <InputWithLabel
          id="search"
          value={searchTerm}
          isFocused
          onInputChange={handleSearch}
    >
        <strong>Search:</strong>
    </InputWithLabel>
   
     ...
     </div>
   );
 };