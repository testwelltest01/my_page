import MemoStackNavigator from "./navigator/MemoStackNavigator";
import { MemoProvider } from "./context/MemoContext";

export default function App() {
  return (
    <MemoProvider>
      <MemoStackNavigator />
    </MemoProvider>
  );
}
