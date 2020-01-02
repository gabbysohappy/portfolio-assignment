5.times do 
    blog = GabBlog.create(
      title: Faker::Lorem.words(number: 1),
      body: Faker::Lorem.paragraph(sentence_count: 5),
    )
  
    3.times do
      Post.create(
        author: Faker::Name.first_name,
        body: Faker::Lorem.paragraph(sentence_count: 1),
        gab_blog_id: blog.id
      )
    end
  end
puts "Data seeded"