export default async function handler(req, res) {
    const search = req.query.search || '';
    var badges = [
        {
            "fieldName" : "Technology & Information",
             "title" : "APA Style: Citations Introduction",
             "creatorName" : "Victoria Raish"
         },
         {
            "fieldName" : "Professional Skills",
             "title" : "IST Careers - Meet a Coach",
             "creatorName" : "Rita Griffth"
         },
         {
           "fieldName" : "Agriculture & Natural Resources",
            "title" : "Treat Yourself",
            "creatorName" : "Allain Diagle"
         }, 
         {
           "fieldName" : "Technology & Information",
            "title" : "Savvy Searcher: Recognizing Bias",
            "creatorName" : "Emily Rimland"
         },
         {
            "fieldName" : "Professional Skills",
             "title" : "Leadership and Teamwork",
             "creatorName" : "Dani Alamo"
         },
         {
            "fieldName" : "Business",
             "title" : "Trend Forecasting",
             "creatorName" : "Alexandra Nielsen"
         },
         {
           "fieldName" : "Communications",
            "title" : "Public Speaking",
            "creatorName" : "Alina Lebedeva"
         }, 
         {
           "fieldName" : "Agriculture & Natural Resources",
            "title" : "Earth and Space",
            "creatorName" : "Karly Freidland"
         },
         {
            "fieldName" : "Professional Skills",
             "title" : "Internships and Interviews",
             "creatorName" : "Deanna Lasorda"
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