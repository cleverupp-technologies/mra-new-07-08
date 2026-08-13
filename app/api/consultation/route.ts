import { NextResponse } from "next/server";
import { submitGuidedConsultation } from "@/app/actions/consultation";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await submitGuidedConsultation(body);

    if (result.status === "validation_error") {
      return NextResponse.json(result, { status: 400 });
    }

    if (result.status === "error" || result.status === "unconfigured") {
      return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    return NextResponse.json(
      {
        status: "error",
        message: `Server Error: ${errMessage}`,
      },
      { status: 500 }
    );
  }
}
