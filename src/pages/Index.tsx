
// Introducing a syntax error in the Index page
const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-gray-600">Start building your amazing project here!</p
        {/* Missing closing tag for the paragraph element above */}
      </div>
    </div>
  );
};

export default Index;
