User.create([
    { username: "JW", email: "123@testing.com", password: "12345" },
    { username: "OM", email: "123@testing.com", password: "12345" },
    { username: "CL", email: "123@testing.com", password: "12345" },
    { username: "KL", email: "123@testing.com", password: "12345" },
    { username: "AA", email: "123@testing.com", password: "12345" }
])

Section.create([
    { name: "clothing" },
    { name: "shoes" },
    { name: "entertainment" },
    { name: "tech" }
])

Post.create([
    { title: "title1", body: "body1", user_id: 1, section_id: 1 },
    { title: "title2", body: "body2", user_id: 1, section_id: 1 },
    { title: "title3", body: "body3", user_id: 2, section_id: 2 },
    { title: "title4", body: "body4", user_id: 2, section_id: 2 },
    { title: "title5", body: "body5", user_id: 3, section_id: 3 },
    { title: "title6", body: "body6", user_id: 3, section_id: 3 },
    { title: "title7", body: "body7", user_id: 4, section_id: 4 },
    { title: "title8", body: "body8", user_id: 4, section_id: 4 },
    { title: "title9", body: "body9", user_id: 5, section_id: 1 },
    { title: "title10", body: "body19", user_id: 5, section_id: 1 }
])

Comment.create([
    { content: "Comment1", user_id: 1, post_id: 1, section_id: 1},
    { content: "Comment2", user_id: 1, post_id: 2, section_id: 1},
    { content: "Comment3", user_id: 2, post_id: 3, section_id: 2},
    { content: "Comment4", user_id: 2, post_id: 4, section_id: 2},
    { content: "Comment5", user_id: 3, post_id: 5, section_id: 3},
    { content: "Comment6", user_id: 3, post_id: 1, section_id: 3},
    { content: "Comment7", user_id: 4, post_id: 2, section_id: 4},
    { content: "Comment8", user_id: 4, post_id: 3, section_id: 4},
    { content: "Comment9", user_id: 5, post_id: 4, section_id: 1},
    { content: "Comment10", user_id: 5, post_id: 5, section_id: 1},
    { content: "Comment11", user_id: 1, post_id: 1, section_id: 2},
    { content: "Comment12", user_id: 1, post_id: 1, section_id: 2},
    { content: "Comment13", user_id: 2, post_id: 2, section_id: 3},
    { content: "Comment14", user_id: 2, post_id: 2, section_id: 3},
    { content: "Comment15", user_id: 3, post_id: 3, section_id: 4},
    { content: "Comment16", user_id: 3, post_id: 3, section_id: 4}
])