import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { error } from "console";

enum CompetitionType {
  SPORTS,
  E_SPORTS,
  CASINO,
}

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const cat1 = searchParams.get("cat1");

  if (cat1 !== "SPORTS" && cat1 !== "E_SPORTS") {
    return NextResponse.json({ error: "failed" });
  }

  try {
    const data = await db.competition.findMany({
      where: {
        type: cat1,
      },
      include: {
        Event: {
          include: {
            Competitor: true
          }
        }
      },
    });

    return NextResponse.json({
      data,
    });
  } catch {
    return NextResponse.json({ error: "failed" });
  }
};

export const POST = async (req: NextRequest) => {
  const { odds, logo, country, competitionId } = await req.json();

  const post = await db.competition.update({
    where: {
      id: "clwntcu830000hrln7gakvlae",
    },
    data: {
      bets: [
        "1_1 wins",
        "x_Draw",
        "2_2 wins",
        "1x_1 wins or draw",
        "12_1 or 2 wins",
        "2x_2 wins or draw",
      ],
    },
  });

  return NextResponse.json({
    post,
  });
};

//   const createCategory = await prisma.post.create({
//     data: {
//       title: 'How to be Bob',
//       categories: {
//         create: [
//           {
//             assignedBy: 'Bob',
//             assignedAt: new Date(),
//             category: {
//               create: {
//                 name: 'New category',
//               },
//             },
//           },
//         ],
//       },
//     },
//   })
