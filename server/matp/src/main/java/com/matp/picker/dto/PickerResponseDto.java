package com.matp.picker.dto;

import com.matp.picker.entity.Picker;
import lombok.Builder;

@Builder
public record PickerResponseDto(Long id, Long placeId, Long groupId, Long memberId) {
    public static PickerResponseDto of(Picker picker) {
        return PickerResponseDto.builder()
                .id(picker.getId())
                .placeId(picker.getPlaceId())
                .groupId(picker.getGroupId())
                .memberId(picker.getMemberId())
                .build();
    }
}


