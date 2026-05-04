import { Link } from "react-router-dom";

export default function Tags({ tagList }) {
  function capitaliseFirstLetter(str) {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className="tag-wrapper">
      {tagList.map((tag, idx) => (
        <>
          <Link
            key={idx}
            className={`tag-btn`}
            // onClick={() => console.log(tag)}
            to={`/?filter=${encodeURIComponent(capitaliseFirstLetter(tag))}`}
            style={{ "--tag-delay": `${180 + idx * 60}ms` }}
          >
            {tag}
          </Link>
        </>
      ))}
    </div>
  );
}
