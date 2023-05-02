import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Max",
    text: "Learning React is fun!",
  },
  {
    id: "q1",
    author: "Nikhil",
    text: "Learning React is great!",
  },
  {
    id: "q1",
    author: "John",
    text: "Learning Vue.js is fun!",
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
