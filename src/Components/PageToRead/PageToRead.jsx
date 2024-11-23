import { useEffect, useState } from "react";
import { LuBarChart3 } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "#23BE0A",
  "#59C6D2",
  "#34495E",
];
const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const PageToRead = () => {
  const [booksId, setBooksId] = useState([]);
  const books = useLoaderData();
  useEffect(() => {
    const storedReadBooks = localStorage.getItem("read-book");
    setBooksId(storedReadBooks);
  }, []);
  const readBooks = books.filter((book) => booksId?.includes(book.bookId));
  return (
    <div className="lg:mx-32 mx-4 py-8 lg:pr-9 mt-8 rounded-2xl bg-[#13131308] flex items-center justify-center z-10">
      <div>
        {readBooks.length > 0 ? (
          <BarChart
            width={1100}
            height={600}
            data={readBooks}
            margin={{
              top: 10,
              right: 20,
              left: 20,
              bottom: 10,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="bookName" />
            <YAxis />
            <Bar
              dataKey="totalPages"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {readBooks.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        ) : (
          <div className="flex flex-col items-center text-center h-[600px] justify-center">
            <LuBarChart3 className="text-5xl text-slate-900 opacity-30" />
            <p className="text-2xl text-slate-900 mt-4 opacity-30 font-medium">
              There is not enough data to display chart!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageToRead;
