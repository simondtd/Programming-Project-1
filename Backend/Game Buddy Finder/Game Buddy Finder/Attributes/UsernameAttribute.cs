using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Game_Buddy_Finder.Attributes
{
    public class UsernameAttribute : ValidationAttribute
    {
        private int _minLength;
        private int _maxLength;
        public UsernameAttribute(int minLength, int maxLength)
        {
            _minLength = minLength;
            _maxLength = maxLength;
        }

        public override bool IsValid(object value)
        {
            try
            {
                var username = (string)value;
                return (username.Length >= _minLength && username.Length <= _maxLength);
            }
            catch
            {
                return false;
            }


        }
    }
}
