export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "company",
      headerName: "Company",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "website",
      headerName: "Website",
      width: 230,
    },
  
    {
      field: "industry",
      headerName: "Industry",
      width: 230,
    },
    {
      field: "location",
      headerName: "Location",
      width: 230,
    },
    /*{
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },*/

  ];
  

  export const userRows = [
    {
      id: 1,
      username: "Shamiri Institute",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      industry: "MedTech",
      website: "www.shamiriinstitute.com",
      location: 'Nairobi',
    },
    {
      id: 2,
      username: "Amazon",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      industry: "Tech",
      website: "www.amazon.com",
      location: 'Remote',
    },
    {
      id: 3,
      username: "Microsoft",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      industry: "Tech",
      website: "www.microsoft.com",
      location: 'Nairobi',
    },
    {
      id: 4,
      username: "Intern Match",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      industry: "Tech",
      website: "www.internmatch.com",
      location: 'Australia',
    },
    {
      id: 5,
      username: "DirectEd Foundation",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      industry: "EdTech",
      website: "www.directEd.com",
      location: 'Nairobi',
    },
    {
      id: 6,
      username: "Shamiri Institute",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      industry: "MedTech",
      website: "www.shamiriinstitute.com",
      location: 'Nairobi',
    },
    {
      id: 7,
      username: "Shamiri Institute",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      industry: "MedTech",
      website: "www.shamiriinstitute.com",
      location: 'Nairobi',
    },
  ];