// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    languages: {
      en: "English",
      kn: "Kannada",
      hi: "Hindi",
      tn: "Tamil"
    },
    movies: {
      en: ["starwars", "avengers", "troy", "batman"]
    },
    cast: {
      starwars: ["a", "b", "c", "d"]
    }
   })
}
