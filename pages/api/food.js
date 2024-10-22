import Food from "../../utils/resData.json"

export default function handler(req, res) {
    res.status(200).json(Food)
  }
  