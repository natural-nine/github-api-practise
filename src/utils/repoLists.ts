export const getCreateDate = (created_at: string) => {
  const date = new Date(created_at);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${year}-${month}-${day}`;
};

export const getCreateLanColor = (language: string) => {
  let lanColor = "";
  if (language === "JavaScript") {
    lanColor = "#f1e062";
  } else if (language === "Python") {
    lanColor = "#3672a5";
  } else if (language === "Java") {
    lanColor = "#b07219";
  } else if (language === "TypeScript") {
    lanColor = "#3278c6";
  } else if (language === "PHP") {
    lanColor = "#4e5d95";
  } else if (language === "Dart") {
    lanColor = "#00b4ab";
  } else if (language === "HTML") {
    lanColor = "#e34c26";
  } else if (language === "Kotlin") {
    lanColor = "#a97afc";
  } else if (language === "C#") {
    lanColor = "#148618";
  } else if (language === "CSS") {
    lanColor = "#563d7c";
  } else if (language === "Swift") {
    lanColor = "#f0533c";
  } else if (language === "Ruby") {
    lanColor = "#701516";
  } else if (language === "Objective-C") {
    lanColor = "#458dfd";
  } else if (language === "C++") {
    lanColor = "#f34b7d";
  } else if (language === "C") {
    lanColor = "#5b5b5b";
  } else if (language === "Jupyter Notebook") {
    lanColor = "#da5b0c";
  } else if (language === "Go") {
    lanColor = "#01add8";
  } else {
    lanColor = "none";
  }
  return lanColor;
};
