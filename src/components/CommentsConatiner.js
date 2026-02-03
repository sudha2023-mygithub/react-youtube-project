const CommentsData = [
  {
    name: "Sudharshan",
    text: "Lorem ipsum dolor sit amet, consectetue adip",
    replies: [
      {
        name: "Sudharshan",
        text: "Lorem ipsum dolor sit amet, consectetue adip",
        replies: [],
      },
      {
        name: "Sudharshan",
        text: "Lorem ipsum dolor sit amet, consectetue adip",
        replies: [],
      },
      {
        name: "Sudharshan",
        text: "Lorem ipsum dolor sit amet, consectetue adip",
        replies: [
          {
            name: "Sudharshan",
            text: "Lorem ipsum dolor sit amet, consectetue adip",
            replies: [],
          },
          {
            name: "Sudharshan",
            text: "Lorem ipsum dolor sit amet, consectetue adip",
            replies: [
              {
                name: "Sudharshan",
                text: "Lorem ipsum dolor sit amet, consectetue adip",
                replies: [],
              },
              {
                name: "Sudharshan",
                text: "Lorem ipsum dolor sit amet, consectetue adip",
                replies: [
                  {
                    name: "Sudharshan",
                    text: "Lorem ipsum dolor sit amet, consectetue adip",
                    replies: [],
                  },
                  {
                    name: "Sudharshan",
                    text: "Lorem ipsum dolor sit amet, consectetue adip",
                    replies: [
                      {
                        name: "Sudharshan",
                        text: "Lorem ipsum dolor sit amet, consectetue adip",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sudharshan",
    text: "Lorem ipsum dolor sit amet, consectetue adip",
    replies: [],
  },
  {
    name: "Sudharshan",
    text: "Lorem ipsum dolor sit amet, consectetue adip",
    replies: [],
  },
  {
    name: "Sudharshan",
    text: "Lorem ipsum dolor sit amet, consectetue adip",
    replies: [],
  },
  {
    name: "Sudharshan",
    text: "Lorem ipsum dolor sit amet, consectetue adip",
    replies: [],
  },
  {
    name: "Sudharshan",
    text: "Lorem ipsum dolor sit amet, consectetue adip",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex flex-row mt-3 bg-gray-100 p-2 rounded-md">
      <img
        className="h-10 pr-2"
        alt="userImage"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&s"
      />
      <div className="px-2">
        <p>{name}</p>
        <p className="font-bold">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border bordeer-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsConatiner = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-2xl">Comments</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default CommentsConatiner;
