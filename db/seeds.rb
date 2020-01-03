5.times do 
    blog = Blog.create(
      title: Faker::Book.title,
      body: Faker::Lorem.paragraph(sentence_count: 5),
    )
  
    3.times do
      Post.create(
        author: Faker::Name.first_name,
        body: Faker::Lorem.paragraph(sentence_count: 1),
        blog_id: blog.id
      )
    end
  end
puts "Data seeded"