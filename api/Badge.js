export default async function handler(req, res) {
    const search = req.query.search || '';
    var badges = [
        {
            "fieldName" : "Dani",
             "title" : "APA Style: Citations Introduction",
             "creatorName" : "Victoria Raish"
         },
         {
            "fieldName" : "Lex",
             "title" : "Savvy Searcher: Recognizing Bias",
             "creatorName" : "Victoria Raish"
         },
         {
           "fieldName" : "Karly",
            "title" : "Savvy Searcher: Recognizing Bias",
            "creatorName" : "Victoria Raish"
         }, 
         {
           "fieldName" : "Sof",
            "title" : "Savvy Searcher: Recognizing Bias",
            "creatorName" : "Victoria Raish"
         },
         {
            "fieldName" : "JO",
             "title" : "APA Style: Citations Introduction",
             "creatorName" : "Victoria Raish"
         },
         {
            "fieldName" : "Carla",
             "title" : "Savvy Searcher: Recognizing Bias",
             "creatorName" : "Victoria Raish"
         },
         {
           "fieldName" : "Alina",
            "title" : "Savvy Searcher: Recognizing Bias",
            "creatorName" : "Victoria Raish"
         }, 
         {
           "fieldName" : "Yvonne",
            "title" : "Savvy Searcher: Recognizing Bias",
            "creatorName" : "Victoria Raish"
         },
         {
            "fieldName" : "Deanna",
             "title" : "APA Style: Citations Introduction",
             "creatorName" : "Victoria Raish"
         }
      
    ];

    badges.map((schoolBadges) => {
        schoolBadges.index = schoolBadges.fieldName.toLowerCase() + " " + schoolBadges.title.toLowerCase() + " " + schoolBadges.creatorName.toLowerCase();
      });
      badges = badges.filter((schoolBadges) => {
        return schoolBadges.index.indexOf(search.toLowerCase()) > -1;
      });
    console.log(badges);
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badges);
  }