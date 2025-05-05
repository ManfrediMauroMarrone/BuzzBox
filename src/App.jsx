import ChatBox from "./components/ChatBox";
import ChatContainer from "./components/ChatContainer";
import ChatMenu from "./components/ChatMenu";

function App() {
  return (
    <>
      <main className="flex h-screen items-center justify-center">
        <ChatContainer>
          <ChatMenu/>
          <ChatBox/>
        </ChatContainer>
      </main>
    </>
  );
}

export default App;
