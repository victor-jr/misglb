

using System.ComponentModel.DataAnnotations;

namespace Misglb.Models 
{
  public class User
  {
    [Key]
    public string Sub { get; set; }
    
    public string Family_Name { get; set; }

    public string Given_Name { get; set; }
    
    public string Locale { get; set; }

    public string Name { get; set; }
    
    public string NickName { get; set; }

    public string Picture { get; set; }

    // updated_at
    // :
    // "2018-05-27T01:46:29.199Z"
  }
}