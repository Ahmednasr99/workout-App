class User < ApplicationRecord

    # to secure the password
    has_secure_password
    has_many :diets, dependent: :destroy
    has_many :workouts, dependent: :destroy

    #validation
    validates :name, presence: true, uniqueness: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validate :permitted_emails

    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "sorry ,that email not permitted")
        end
    end


end
