"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { JSX } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export function Offer() {
    return (
        <div className="align-center">
            <Carousel
                plugins={[Autoplay({ delay: 1000 })]} 
            >
                <CarouselContent>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="w-full h-screen"> {/* Full width and height of the viewport */}
                                <Card className="w-full h-full">
                                    <CardContent className="flex items-center justify-center p-0">
                                        {/* Image with dynamic width and height */}
                                        <Image
                                            src={`/images/img${index + 1}.jpg`}
                                            alt={`image ${index + 1}`}
                                            width={1200} // Larger width for high resolution
                                            height={675} // Corresponding height (16:9 ratio for example)
                                            layout="intrinsic" // Adjust image size based on container
                                            className="object-cover w-full h-full rounded-md" // Cover the full area of the container
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default Offer;
