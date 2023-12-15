using System.Runtime.Serialization;

namespace student_management_system.Exceptions
{
    [Serializable]
    internal class InvalidGenderException : Exception
    {
        public InvalidGenderException()
        {
        }

        public InvalidGenderException(string? message) : base(message)
        {
        }

        public InvalidGenderException(string? message, Exception? innerException) : base(message, innerException)
        {
        }

        protected InvalidGenderException(SerializationInfo info, StreamingContext context) : base(info, context)
        {
        }
    }
}