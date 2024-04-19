const edu = [
  {
    id: 1,
    year: "2020 - Present",
    colon: ":",
    desc: [
      {
        subid: 1,
        text: "B.Tech in Computer Science and Engineering",
      },
      {
        subid: 2,
        text: "G. Pulla Reddy Engineering College (Autonomous), Kurnool",
      },
      {
        subid: 3,
        text: (
          <span
            dangerouslySetInnerHTML={{
              __html: `CGPA: 8.61 till 7<sup>th</sup> semester`,
            }}
          />
        ),
      },
    ],
  },
  {
    id: 2,
    year: "2018 - 2020",
    colon: ":",
    desc: [
      {
        subid: 1,
        text: "Intermediate - MPC",
      },
      {
        subid: 2,
        text: "Sri Chaitanya Junior College, Kurnool",
      },
      {
        subid: 3,
        text: `CGPA: 9.94/10`,
      },
    ],
  },
  {
    id: 3,
    year: "2017 - 2018",
    colon: ":",
    desc: [
      {
        subid: 1,
        text: "SSC",
      },
      {
        subid: 2,
        text: "Cattamanchi Ramalinga Reddy High School, Kurnool",
      },
      {
        subid: 3,
        text: "CGPA: 9.7/10",
      },
    ],
  },
];

export default edu;
